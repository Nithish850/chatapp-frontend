type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface IRequestPayload {
  endpoint: string;
  method: Method;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export class ApiService {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request({ endpoint, method = "GET", headers, body }: IRequestPayload) {
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        method: method,
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async get(endpoint: string) {
    return await this.request({ endpoint, method: "GET" });
  }

  async post(endpoint: string) {
    return await this.request({ endpoint, method: "POST" });
  }

  async put(endpoint: string) {
    return await this.request({ endpoint, method: "PUT" });
  }

  async patch(endpoint: string) {
    return await this.request({ endpoint, method: "PATCH" });
  }

  async delete(endpoint: string) {
    return await this.request({ endpoint, method: "DELETE" });
  }
}

export const baseApiService = new ApiService(
  process.env.BACKEND_BASE_URL as string
);
