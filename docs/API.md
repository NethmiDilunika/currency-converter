# API Documentation

## OpenAPI 3.0 Specification

```yaml
openapi: 3.0.0
info:
  title: CurrencyPro API
  version: 1.0.0
  description: API for currency conversion and exchange rate data

servers:
  - url: https://api.currencypro.com/v1
    description: Production server
  - url: https://staging-api.currencypro.com/v1
    description: Staging server

paths:
  /convert:
    get:
      summary: Convert amount between currencies
      parameters:
        - name: from
          in: query
          required: true
          schema:
            type: string
            example: USD
        - name: to
          in: query
          required: true
          schema:
            type: string
            example: EUR
        - name: amount
          in: query
          required: true
          schema:
            type: number
            example: 100
      responses:
        '200':
          description: Successful conversion
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConversionResult'
        '400':
          description: Invalid request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '429':
          description: Rate limit exceeded
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /rates:
    get:
      summary: Get latest exchange rates
      parameters:
        - name: base
          in: query
          required: true
          schema:
            type: string
            example: USD
      responses:
        '200':
          description: Latest exchange rates
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExchangeRates'

components:
  schemas:
    ConversionResult:
      type: object
      properties:
        from:
          type: string
          example: USD
        to:
          type: string
          example: EUR
        amount:
          type: number
          example: 100
        result:
          type: number
          example: 85.23
        rate:
          type: number
          example: 0.8523
        timestamp:
          type: string
          format: date-time

    ExchangeRates:
      type: object
      properties:
        base:
          type: string
          example: USD
        timestamp:
          type: string
          format: date-time
        rates:
          type: object
          additionalProperties:
            type: number
          example:
            EUR: 0.8523
            GBP: 0.7323
            JPY: 110.45

    Error:
      type: object
      properties:
        code:
          type: string
          example: INVALID_CURRENCY
        message:
          type: string
          example: Invalid currency code provided
```