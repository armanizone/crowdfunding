migrate((db) => {
  const collection = new Collection({
    "id": "sk77yvgqbyt4tsm",
    "created": "2023-02-03 07:27:15.905Z",
    "updated": "2023-02-03 07:27:15.905Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "jzavu4m4",
        "name": "status",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm");

  return dao.deleteCollection(collection);
})
