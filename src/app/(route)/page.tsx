import MonthCalender from "./components/main/MonthCalender";
import MainTrendChart from "./components/main/MainTrandChart";
import ProjectChart from "./components/main/ProjectChart";
import ProductChart from "./components/main/ProductChart";
import FirstSalesChart from "./components/main/FirstSalesChart";
import FirstPurchaseChart from "./components/main/FirstPurchaseChart";
import ContractManagement from "./components/main/ContractManagement";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-full">
      <div className="grid grid-cols-[1fr_1fr_clamp(320px,29%,430px)] gap-4 h-full">
        <Card className="col-span-2 gap-2">
          <CardHeader>
            <CardTitle>연간 매입매출 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <MainTrendChart />
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader>
            <CardTitle>프로젝트 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>월별매출 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <FirstSalesChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>월별매입 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <FirstPurchaseChart />
          </CardContent>
        </Card>
        <Card className="row-span-2 gap-0">
          <CardHeader>
            <CardTitle>월별일정</CardTitle>
          </CardHeader>
          <CardContent>
            <MonthCalender />
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader>
            <CardTitle>제품별 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>계약관리</CardTitle>
          </CardHeader>
          <CardContent>
            <ContractManagement />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
