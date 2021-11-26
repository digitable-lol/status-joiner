# Status Joiner

![arch](./design/arch.jpg)

## Useful links

- [Figma](https://www.figma.com/file/4VblKaeQnFwIMrBPlfPK0c/Status-joiner?node-id=0%3A1)

## API docs

### Teams

- [Authorization](https://docs.microsoft.com/ru-ru/graph/auth-v2-user?context=graph%2Fapi%2F1.0&view=graph-rest-1.0)
- [Statuses](https://docs.microsoft.com/ru-ru/graph/api/presence-get?view=graph-rest-1.0&tabs=http#code-try-1)

- Set status

```javascript
fetch("https://presence.teams.microsoft.com/v1/me/forceavailability/", {
  headers: {
    authorization: "Bearer TOKEN_HERE",
    Referer: "https://teams.microsoft.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: '{"availability":"Available"}',
  method: "PUT",
});
```
