migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erzegoit",
    "name": "project",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "sk77yvgqbyt4tsm",
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
    "id": "erzegoit",
    "name": "project",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "sk77yvgqbyt4tsm",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
