migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "27suzq3g",
    "name": "rewards",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "6ouyvht9duh17ko",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("27suzq3g")

  return dao.saveCollection(collection)
})
