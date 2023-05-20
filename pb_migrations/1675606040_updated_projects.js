migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2mscgbnj",
    "name": "backed",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puaniiyv",
    "name": "earned",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r7vpmgfg",
    "name": "comments",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2mscgbnj",
    "name": "backed",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puaniiyv",
    "name": "earned",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spfagcey",
    "name": "rewards_count",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r7vpmgfg",
    "name": "comments",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
