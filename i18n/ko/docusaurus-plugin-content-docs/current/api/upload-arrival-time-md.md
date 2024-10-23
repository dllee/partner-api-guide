# 배송자도착시간 업로드

## 요청 정보

- Method: **POST**
- URI: `/fetch-arrival`

## 헤더

```json
{
  "Authorization": "Bearer api-key..."
}
```

## 요청 본문

```json
{
  "inputs": [Data]
}
```

### Data 구조

| 변수 | 타입 | Nullable | 설명 |
|------|------|----------|------|
| labelCode | string |  | 배송라벨 |
| arrivalTime | string |  | 배송자도착 시간 (물품 수취 시간) (YYYY-MM-DD HH:mm:ss) |

## 응답

### 성공 응답 (201 Created)

```json
{
  "statusCode": 201,
  "successes": ["배송라벨1", "배송라벨2"], // 도착시간 정상등록
  "fails": ["배송라벨3", "배송라벨4"] // 도착시간 등록실패
}
```

성공 조건:
1. 배송데이터 연동 상태
2. 출고 상태의 배송라벨(출고시간 설정된 상태)

실패 조건:
1. 매핑 상태(배송데이터 연동 전)
2. 도착 상태의 배송라벨(OTQ 스캔 완료된 상태)
3. 등록 도착 시간이 출고 시간보다 앞선 경우

### 오류 응답

- `Unauthorized`: 헤더 인증 오류
- `TRANSPORT_NOT_EXIST`: Not Found - 라벨 코드 오류(배송이 존재하지 않은 라벨 코드)
- `Internal Server Error`: API 서버 오류
