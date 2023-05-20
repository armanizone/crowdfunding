migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("31exdnwm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "31exdnwm",
    "name": "uid",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
