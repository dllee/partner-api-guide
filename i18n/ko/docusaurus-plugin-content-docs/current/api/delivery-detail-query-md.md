# 배송 상세 조회

## 요청 정보

- Method: **GET**
- URI: `/detail/{labelCode}`

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
  "buyerName": "가나다병원",
  "buyerAddress": "서울특별시 ..",
  "productName": "타이레놀",
  "productQuantity": 5,
  "transportStatus": "ARRIVE_PASS",
  "departureTime": "2022-06-16 10:00:00",
  "departureAddress": "경기도 김포시 고촌읍 전호리 367-2",
  "arrivalTime": "2022-06-25 08:02:04",
  "arrivalAddress": "서울특별시 강남구 ..",
  "completionTime": "2022-06-25 08:06:52",
  "mkt": 5,
  "temperatures": [2.3, 2.5, 3, 7...]
}
```

### 응답 데이터 구조

| 변수             | 타입             | Nullable | 설명                                   |
| ---------------- | ---------------- | -------- | -------------------------------------- |
| serial           | string           |          | OTQ S/N                                |
| labelCode        | string           |          | 배송라벨                               |
| buyerName        | string           |          | 배송처 상호                            |
| buyerAddress     | string           |          | 배송처 주소                            |
| productName      | string           |          | 제품명                                 |
| productQuantity  | integer          |          | 제품수량                               |
| transportStatus  | string(ENUM)     |          | 배송상태                               |
| departureTime    | string           | v        | 출고시간 (YYYY-MM-DD HH:mm:ss KST)     |
| departureAddress | string           | v        | 출고지 주소                            |
| arrivalTime      | string           | v        | 도착시간 (YYYY-MM-DD HH:mm:ss KST)     |
| arrivalAddress   | string           | v        | 도착지 주소 (=buyerAddress)            |
| completionTime   | string           | v        | 스캔완료시간 (YYYY-MM-DD HH:mm:ss KST) |
| mkt              | float            | v        | 스캔 완료시 OTQ 온도 데이터의 MKT      |
| temperatures     | Array`<float>` |          | 스캔 완료시 OTQ 온도 데이터 배열       |

transportStatus ENUM 값:

- FETCHED: 데이터 연동시
- DEPARTED: 출고시간 설정시
- ARRIVE_PASS: 정상도착시
- ARRIVE_FAIL: 비정상도착시 (현재는 모두 정상도착)
- Recalled: 반품 도착 시

### 오류 응답

- `PASSWORD_INCORRECT`: Unauthorized - 패스워드 오류
- `TRANSPORT_NOT_EXIST`: Not Found - 조회된 배송 없음
