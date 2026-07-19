export interface ApiRequest {
  id: number;
  full_name: string;
  phone: string;
  email: string | null;
  description: string | null;
  services: ApiService[];
  seen: boolean;
  status: string;
}

export interface ApiService {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function normalizeServices(
  services: ApiService[],
  locale: string,
): ApiService[] {
  const map = new Map<string, { fa?: ApiService; en?: ApiService }>();

  services.forEach((service) => {
    const key = service.image;

    const current = map.get(key) ?? {};

    if (/[\u0600-\u06FF]/.test(service.name)) {
      current.fa = service;
    } else {
      current.en = service;
    }

    map.set(key, current);
  });

  return [...map.values()].map((item) =>
    locale === "fa" ? (item.fa ?? item.en)! : (item.en ?? item.fa)!,
  );
}