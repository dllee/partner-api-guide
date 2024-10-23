# OTQ-배송라벨 매핑 (고객사 → 윌로그)

이 API는 OTQ와 배송라벨 매핑 값을 연동합니다. 일반적으로 PDA 또는 Logis Linker 앱을 통해 진행되며, 필요에 따라 선택적으로 사용할 수 있습니다.

## 요청 정보

- Method: **POST**
- URI: `/mapping`

## 헤더

```json
{
  "Authorization": "Bearer api-key..."
}
```

## 요청 본문

```json
{
  "input": {
    "serial": "string",
    "labelCode": "string"
  }
}
```

### 데이터 구조

| 변수 | 타입 | Nullable | 설명 |
|------|------|----------|------|
| serial | string |  | OTQ 시리얼 (구조: 12345678T+238 (시리얼/현재온도)) |
| labelCode | string |  | 바코드번호 (택배사 배송라벨 바코드) |

## 응답

### 성공 응답 (201 Created)

```json
{
  "statusCode": 201,
  "mappingLog": {
    "serial": "string",
    "labelCode": "string",
    "createdAt": "Date"
  }
}
```

### 오류 응답

- `INVALID_OTQ_SERIAL`: Bad Request - 잘못된 파라미터 (OTQ의 시리얼 오류)
- `DEVICE_STATUS_IS_DEPARTED`: Bad Request - 잘못된 파라미터 (매핑 시도한 S/N이 출고 상태의 디바이스 S/N)
- `Unauthorized`: 헤더 인증 오류
- `COMPANY_NOT_EXIST`: Not Found - 고객사 조회 오류 (apiKey로 고객사가 조회되지 않음)
- `DEVICE_NOT_EXIST`: Not Found - 디바이스 조회 오류
- `MAPPING_LOG_UPDATE_ERROR`: Internal Server Error
