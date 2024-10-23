# 연동 안내

## API 서버 정보

- **Endpoint**: [`https://api.willog.io/v1/cdl/logis`](https://api.willog.io/v1/cdl/logis)

## 인증 방식

모든 API 요청에는 다음과 같은 인증 방식을 사용합니다:

- Header의 Authorization: `Bearer <API KEY>`
- 모든 API는 당사가 제공한 ApiKey 값을 Request Header에 포함하여 요청해야 합니다.
- API Key는 고객사별로 전달될 예정입니다.

예시:
```json
{
  "Authorization": "Bearer api-key..."
}
```

## 주의사항

1. API 키는 안전하게 보관하고 노출되지 않도록 주의하세요.
2. 각 API의 세부 사항은 해당 문서를 참조하세요.
