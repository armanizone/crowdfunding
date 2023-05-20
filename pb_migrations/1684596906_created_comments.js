migrate((db) => {
  const collection = new Collection({
    "id": "wyl3vicguve9b4j",
    "created": "2023-05-20 15:35:06.456Z",
    "updated": "2023-05-20 15:35:06.456Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "osdrczrr",
        "name": "comment",
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
        "id": "bqstihj3",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "email"
          ]
        }
      },
      {
        "system": false,
        "id": "whi6icnp",
        "name": "project",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "sk77yvgqbyt4tsm",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("wyl3vicguve9b4j");

  return dao.deleteCollection(collection);
})
