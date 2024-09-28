import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";

export function IndexPage() {
  return (
    <div className="p-4 w-fit">
      <h1 className="text-center">Remix + Shadcn/ui</h1>
      <div className="flex mt-2 flex-col gap-2">
        <Input />
        <Button variant={"outline"} size={"lg"}>
          Click it!
        </Button>
      </div>
    </div>
  );
}
