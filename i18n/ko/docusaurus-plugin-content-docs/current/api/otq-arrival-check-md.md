# OTQ 도착(회수)시 검수

## 요청 정보

- Method: **GET**
- URI: `/check-arrival/{labelCode}`

## 요청 파라미터

```json
{ "labelCode": "String" }
```

## 응답

### 성공 응답 (200 OK)

```json
{
  "serial": "40000001",
  "labelCode": "205000000000001",
  "isArrived": true
}
```

### 응답 데이터 구조

| 변수 | 타입 | Nullable | 설명 |
|------|------|----------|------|
| serial | string |  | OTQ S/N |
| labelCode | string |  | 배송라벨 |
| isArrived | boolean |  | 도착 스캔 완료 여부 |

### 오류 응답

- `PASSWORD_INCORRECT`: Unauthorized - 패스워드 오류
- `TRANSPORT_NOT_EXIST`: Not Found - 조회된 배송 없음
