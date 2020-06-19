const { Service } = require('feathers-mongodb');
var ObjectId = require('mongodb').ObjectID;

exports.Recordings = class Recordings extends Service {
  constructor(options, app) {
    super(options);

    app.get('mongoClient').then((db) => {
      this.Model = db.collection('recordings');
    });
  }

  async find() {
    return await this.Model.find({}, { fields: { events: 0 } }).toArray();
  }

  async get(id) {
    const data = await this.Model.findOne({ _id: new ObjectId(id) });
    return data;
  }

  async create() {
    return this.Model.insertOne({ events: [] });
  }

  async patch(id, data) {
    const query = { _id: new ObjectId(id) };
    console.log(JSON.stringify(data));
    const update = { $push: { events: { $each: data } } };
    const options = { returnNewDocument: true };

    return this.Model.findOneAndUpdate(query, update, options)
      .then((updatedDocument) => {
        if (updatedDocument) {
          console.log(`Successfully updated document: ${updatedDocument}.`);
        } else {
          throw new Error('No document found');
        }
        return updatedDocument;
      })
      .catch((err) => {
        throw err;
      });
  }
};
