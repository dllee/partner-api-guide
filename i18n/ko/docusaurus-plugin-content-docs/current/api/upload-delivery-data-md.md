# 배송 데이터 업로드 (고객사 → 윌로그)

## 요청 정보

- Method: **POST**
- URI: `/fetch`

## 헤더

```json
{
  "Authorization": "Bearer api-key..."
}
```

## 요청 본문

```json
{
  "transports": [Data]
}
```

### Data 구조

| 변수 | 타입 | Nullable | 설명 |
|------|------|----------|------|
| customerCode | string | v | 화주코드 (미입력 시 JWT 인증 계정의 고객사로 연동) |
| labelCode | string |  | 바코드번호 (택배사 배송라벨 바코드 - unique) |
| buyerName | string |  | 배송처명 |
| buyerAddress | string |  | 주소 |
| productName | string |  | 물품내역정보 (제품명) |
| productQuantity | integer |  | 수량 (제품수량) |
| buyerAddressDetail | string | v | 상세주소 |
| buyerPostCode | string | v | 우편번호 |
| serial | string | v | 매핑된 OTQ 시리얼 (미입력 시 OTQ-배송라벨 선매핑 필요) |
| departureTime | string | v | 출고시간 (YYYY-MM-DD HH:mm:ss KST) (미입력 시 콘솔에서 출고시간 설정 필요) |

주의: `serial`과 `departureTime`은 둘 다 입력하거나 둘 다 입력하지 않아야 합니다.

## 응답

### 성공 응답 (201 Created)

```json
{
  "statusCode": 201,
  "successes": ["배송라벨1", "배송라벨2"], // 배송데이터 정상등록
  "skips": ["배송라벨3"], // 배송라벨 중복
  "departeds": ["배송라벨4"], // 이미 출고 진행된 배송라벨
  "needMappings": ["배송라벨5"], // 매핑 필요 배송라벨
  "fails": ["배송라벨6"] // 배송데이터 등록 실패
}
```

### 오류 응답

- `Unauthorized`: 헤더 인증 오류
- `Conflict Error`: 서버 충돌 오류
- `Internal Server Error`: API 서버 오류
