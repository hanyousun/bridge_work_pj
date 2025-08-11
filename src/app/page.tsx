// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>연간 매입매출 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₩ 3,230,589,000</p>
            <Button className="mt-4">자세히 보기</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <p>아직 데이터가 없습니다.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
