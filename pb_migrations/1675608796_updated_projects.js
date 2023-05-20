migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrqietgj",
    "name": "goal",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 1000000000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vli2et8s",
    "name": "duration",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 120
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrqietgj",
    "name": "goal",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 10000,
      "max": 1000000000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vli2et8s",
    "name": "duration",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 15,
      "max": 120
    }
  }))

  return dao.saveCollection(collection)
})
