"use client";

import ClientRow from "@/components/clientRequests/ClientRow";
import HeaderLayout from "@/components/layout/HeaderLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { clientRequests, services } from "@/data/admins";
import {
  ApiRequest,
  ApiService,
  normalizeServices,
} from "@/lib/normalize-services";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownUp, Filter, Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

interface pageProps {}

const page = ({}: pageProps) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [service, setService] = useState("all");

  const t = useTranslations("clientRequests");
  const locale = useLocale();

  // ? requwsts

  const [requests, setRequests] = useState<ApiRequest[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("/api/requests", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data: ApiRequest[] = await res.json();

        // console.log(data);

        setRequests(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, []);

  const filteredClients = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const normalizedPhoneSearch = search.replace(/\s+/g, "");

    return requests
      .map((request) => ({
        id: request.id,
        fullName: request.full_name,
        phoneNumber: request.phone,
        description: request.description ?? "",
        date: "",
        services: normalizeServices(request.services, locale),
      }))
      .filter((client) => {
        const matchesName = client.fullName
          .toLowerCase()
          .includes(normalizedSearch);

        const matchesPhone = client.phoneNumber
          .replace(/\s+/g, "")
          .includes(normalizedPhoneSearch);

        const matchesService =
          service === "all" ||
          client.services.some((item) => item.name === service);

        return (matchesName || matchesPhone) && matchesService;
      });
  }, [requests, search, service, locale]);

  return (
    <div className="flex flex-1 flex-col">
      <HeaderLayout
        title={t("header.title")}
        descrption={t("header.description")}
      />

      <div className="flex flex-1 flex-col px-10 pt-10 pb-10">
        <section className="bg-secondary-bg relative flex h-full flex-col overflow-hidden rounded-xl">
          {/* sort and filter */}
          <div className="flex items-center justify-between gap-5 px-7 pt-7">
            {/* Search */}
            <div className="group relative max-w-xl flex-1">
              <Search className="text-muted-foreground group-focus-within:text-primary absolute top-1/2 left-4 size-5 -translate-y-1/2 transition-all" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("filters.searchPlaceholder")}
                className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 h-12 w-full rounded-xl border pr-5 pl-12 text-sm transition-all outline-none focus:ring-4"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Service Filter */}
              <div className="group relative">
                <Filter className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 h-12 min-w-[260px] cursor-pointer appearance-none rounded-xl border pr-9 pl-11 text-sm transition-all outline-none focus:ring-4"
                >
                  <option value="all">{t("filters.allServices")}</option>

                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="group relative">
                <ArrowDownUp className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value as "newest" | "oldest")
                  }
                  className="bg-tertiary border-border-secondary focus:border-primary focus:ring-primary/15 h-12 min-w-[170px] cursor-pointer appearance-none rounded-xl border pr-9 pl-11 text-sm transition-all outline-none focus:ring-4"
                >
                  <option value="newest">{t("filters.newestFirst")}</option>

                  <option value="oldest">{t("filters.oldestFirst")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-border-secondary m-7 mt-7 h-full overflow-hidden rounded-xl border">
            {/* header */}
            <div className="border-b-border-secondary bg-tertiary border-b px-11">
              <div className="text-muted-foreground grid h-14 grid-cols-[90px_1.5fr_1.5fr_2fr_1.75fr_140px_120px] items-center text-xs font-semibold tracking-wider uppercase">
                <div className="ps-1">{t("table.id")}</div>
                <div className="ps-0.5">{t("table.fullName")}</div>
                <div className="ps-1">{t("table.phoneNumber")}</div>
                <div className="ps-1.5">{t("table.services")}</div>
                <div className="pe-4">{t("table.description")}</div>
                {/* <div className="text-center">{t("table.date")}</div> */}
                <div className="text-center">{t("table.actions")}</div>
              </div>
            </div>

            {/* Rows */}
            <div className="flex w-full flex-col items-center gap-y-2.5 overflow-y-auto ps-6 pe-1.5 pt-2.5 pb-7">
              <ScrollArea
                dir={locale === "en" ? "ltr" : "rtl"}
                className="h-[500px] w-full"
              >
                <AnimatePresence mode="popLayout">
                  {filteredClients.length > 0 ? (
                    <div className="pe-4.5">
                      {filteredClients.map(
                        ({
                          date,
                          fullName,
                          id,
                          phoneNumber,
                          services,
                          description,
                        }) => (
                          <ClientRow
                            key={id}
                            id={id}
                            fullName={fullName}
                            phoneNumber={phoneNumber}
                            description={description}
                            // date={date}
                            services={services.map((item) => item.name)}
                            onDelete={() => console.log("Delete:", id)}
                          />
                        ),
                      )}
                    </div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-[420px] flex-col items-center justify-center"
                    >
                      <Search className="text-muted-foreground mb-4 size-14 opacity-40" />

                      <h3 className="text-foreground text-lg font-semibold">
                        {t("empty.title")}
                      </h3>

                      <p className="text-muted-foreground mt-2 text-sm">
                        {t("empty.description")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollArea>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
