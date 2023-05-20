migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // remove
  collection.schema.removeField("9yfnjwfi")

  // remove
  collection.schema.removeField("xn80pssb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vhrupibd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uidqnjhw",
    "name": "user",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9yfnjwfi",
    "name": "uid",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xn80pssb",
    "name": "user",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("vhrupibd")

  // remove
  collection.schema.removeField("uidqnjhw")

  return dao.saveCollection(collection)
})
