migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdgkfhfw",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o73eu6zh",
    "name": "city",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwwj2dn6",
    "name": "detail_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vr7vbupz",
    "name": "launched",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jymyhwsm",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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

  // add
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

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3il6fxba",
    "name": "author",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  // remove
  collection.schema.removeField("bomtitpp")

  // remove
  collection.schema.removeField("fdgkfhfw")

  // remove
  collection.schema.removeField("o73eu6zh")

  // remove
  collection.schema.removeField("hrqietgj")

  // remove
  collection.schema.removeField("vli2et8s")

  // remove
  collection.schema.removeField("qwwj2dn6")

  // remove
  collection.schema.removeField("2mscgbnj")

  // remove
  collection.schema.removeField("vr7vbupz")

  // remove
  collection.schema.removeField("jymyhwsm")

  // remove
  collection.schema.removeField("puaniiyv")

  // remove
  collection.schema.removeField("spfagcey")

  // remove
  collection.schema.removeField("r7vpmgfg")

  // remove
  collection.schema.removeField("x8fvc0he")

  // remove
  collection.schema.removeField("3il6fxba")

  return dao.saveCollection(collection)
})
