migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("spfagcey")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spfagcey",
    "name": "rewards_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
})
