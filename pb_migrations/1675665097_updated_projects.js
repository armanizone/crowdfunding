migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("x8fvc0he")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0joe3fgb",
    "name": "user",
    "type": "relation",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8fvc0he",
    "name": "user",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0joe3fgb")

  return dao.saveCollection(collection)
})
