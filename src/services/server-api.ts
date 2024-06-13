import { ofetch } from 'ofetch'

//const DOMAIN_HOST = 'https://chathub.gg';
const DOMAIN_HOST = 'http://127.0.0.1'

export async function decodePoeFormkey(html: string): Promise<string> {
  const resp = await ofetch(`${DOMAIN_HOST}/api/poe/decode-formkey`, {
    method: 'POST',
    body: { html },
  })
  return resp.formkey
}

type ActivateResponse =
  | {
      activated: true
      instance: { id: string }
      meta: { product_id: number }
    }
  | { activated: false; error: string }

export async function activateLicense(key: string, instanceName: string) {
  return ofetch<ActivateResponse>(`${DOMAIN_HOST}/api/premium/activate`, {
    method: 'POST',
    body: {
      license_key: key,
      instance_name: instanceName,
    },
  })
}

interface Product {
  price: number
}

export async function fetchPremiumProduct() {
  return ofetch<Product>(`${DOMAIN_HOST}/api/premium/product`)
}

export async function createDiscount() {
  return ofetch<{ code: string; startTime: number }>(`${DOMAIN_HOST}/api/premium/discount/create`, {
    method: 'POST',
  })
}

export interface Discount {
  code: string
  startTime: number
  price: number
  percent: number
}

export interface Campaign {
  description: string
  code: string
  price: number
}

interface PurchaseInfo {
  price: number
  discount?: Discount
  campaign?: Campaign
}

/*
export async function fetchPurchaseInfo() {
  return ofetch<PurchaseInfo>(`${DOMAIN_HOST}/api/premium/info')
}
*/

export async function fetchPurchaseInfo(): Promise<PurchaseInfo> {
  return {
    price: 0,
  }
}

export async function checkDiscount(params: { appOpenTimes: number; premiumModalOpenTimes: number }) {
  return ofetch<{ show: boolean; campaign?: Campaign }>(`${DOMAIN_HOST}/api/premium/discount/check`, { params })
}
