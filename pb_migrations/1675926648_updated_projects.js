migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j1msdnbr",
    "name": "detail_images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 25,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j1msdnbr",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 25,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
