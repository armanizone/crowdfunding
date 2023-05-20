migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "08c0w4ko",
    "name": "sending",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // remove
  collection.schema.removeField("08c0w4ko")

  return dao.saveCollection(collection)
})
