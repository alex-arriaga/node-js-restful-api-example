# Node.js RESTful API Example

An example about how to create a RESTful API using Express.js. 
The four CRUD operations are provided: create, read, update and delete records. 


## GET /events


## POST /events

**Headers**

Content-Type : application/json

**Request body (raw)**

```
{
    "topics": "",
    "thumbnail": "/img/tr-3.jpeg",
    "url": "index.html",
    "overrideURL": "",
    "linkType": "",
    "title": "Created by Postman",
    "summary": "Lorem ipsum dolor sit amet"
}
```


## PUT /events/:id

**Headers**

Content-Type : application/json

**Request body (raw)**

```
{
	"id": "1",
    "topics": "",
    "thumbnail": "/img/tr-3.jpeg",
    "url": "index.html",
    "overrideURL": "",
    "linkType": "",
    "title": "Updated by Postman",
    "summary": "Lorem ipsum dolor sit amet"
}
```


## DELETE /events/:id




