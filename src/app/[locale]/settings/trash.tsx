"use client";

interface trashProps {}

const trash = ({}: trashProps) => {
  return (
    <div>
      {/* right side === hidden */}
      {/* <div className="border-s-border-secondary hidden h-screen w-75 border-s">
        <div className="border-b-border-secondary border-b px-4 py-4">
          <div className="text-center text-2xl">{t("overview.title")}</div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 px-5 pt-4">
          <AccessOverviewItem qty="4" label={t("overview.totalAdmins")} />
          <AccessOverviewItem qty="3" label={t("overview.onlineNow")} />
          <AccessOverviewItem qty="9" label={t("overview.activePermissions")} />
          <AccessOverviewItem qty="4" label={t("overview.sections")} />
        </div>

       
        <div className="bg-border-secondary mx-5 my-8 h-px" />

        
        <div className="flex flex-col px-5">
          <div className="text-muted-foreground mb-3 ps-1.5 text-sm">
            {t("permissionSummary.title")}
          </div>

          <div className="border-border-secondary overflow-hidden rounded-xl border">
            <div className="bg-tertiary text-muted-foreground flex items-center justify-between px-3 py-2 text-sm">
              <div>{t("permissionSummary.user")}</div>
              <div>{t("permissionSummary.accessLevel")}</div>
            </div>

            <div className="bg-border-secondary flex flex-col gap-y-px">
              {users.map((user) => (
                console.log("🚀 ~ Page ~ users:", users)
                <div
                  key={user.id}
                  className="bg-background text-foreground flex items-center justify-between px-3 py-3 text-sm"
                >
                  <span>{user.name}</span>

                  <span className="text-primary bg-secondary border-primary rounded-md border px-2 py-1 text-xs">
                    {t(`accessLevels.${user.accessLevel}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default trash;
