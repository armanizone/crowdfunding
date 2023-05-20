migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("jzavu4m4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9wjdyrr",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "draft",
        "moderate",
        "posted",
        "paused",
        "closed",
        "rejected"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzavu4m4",
    "name": "status",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("t9wjdyrr")

  return dao.saveCollection(collection)
})
