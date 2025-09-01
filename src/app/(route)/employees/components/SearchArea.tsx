import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Datepicker from "@/components/ui/datepicker";
export default function SearchArea() {
  return (
    <div className="border-[1px] border-primary px-8 py-5 bg-background rounded-xl">
      <div className="grid grid-cols-3 grid-rows-2 gap-y-2 gap-x-12 justify-items-start items-center">
        <div className="flex items-center gap-2">
          <Label>고객사</Label>
          <Input className="w-40" />
        </div>
        <div className="flex items-center gap-2">
          <Label>프로젝트</Label>
          <Input className="w-72" />
        </div>
        <div className="flex items-center gap-2">
          <Label>투입기간 </Label>
          <Input className="w-40" />
        </div>
        <div className="flex items-center gap-2">
          <Label>요청회사</Label>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="선택하기" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="select01">요청회사01</SelectItem>
                <SelectItem value="select02">요청회사02</SelectItem>
                <SelectItem value="select03">요청회사03</SelectItem>
                <SelectItem value="select04">요청회사04</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label>기간 </Label>
          <div className="flex items-center gap-1">
            <Datepicker className="w-24" />
            <span>~</span>
            <Datepicker className="w-24" />
          </div>
          <div className="flex gap-1 items-center">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="font-normal text-[13px]">
              기간무시
            </Label>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Label>상태</Label>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="선택하기" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="state01">진행중</SelectItem>
                <SelectItem value="state02">진행예정</SelectItem>
                <SelectItem value="state03">완료예정</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
