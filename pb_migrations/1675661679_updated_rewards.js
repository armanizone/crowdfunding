migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9yfnjwfi",
    "name": "uid",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9yfnjwfi",
    "name": "uid",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
