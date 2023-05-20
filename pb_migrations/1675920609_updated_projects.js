migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bomtitpp",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a1h9avyb",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bomtitpp",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 180,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a1h9avyb",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
