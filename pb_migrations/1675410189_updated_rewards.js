migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erzegoit",
    "name": "project_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "sk77yvgqbyt4tsm",
      "cascadeDelete": false
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // remove
  collection.schema.removeField("erzegoit")

  // remove
  collection.schema.removeField("9yfnjwfi")

  return dao.saveCollection(collection)
})
