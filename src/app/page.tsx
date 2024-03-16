import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="bg-slate-400  dark:bg-slate-800 w-full p-3 flex justify-between px-32">
        <div className="space-x-8">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex justify-center items-center px-7 py-3 gap-4">
        <Button>Click Me</Button>
        <Button variant={"primary"}>Click Me</Button>
        <Button variant={"primaryOutline"}>Click Me</Button>
        <Button variant={"secondary"}>Click Me</Button>
        <Button variant={"secondaryOutline"}>Click Me</Button>
        <Button variant={"danger"}>Click Me</Button>
        <Button variant={"dangerOutline"}>Click Me</Button>
        <Button variant={"super"}>Click Me</Button>
        <Button variant={"superOutline"}>Click Me</Button>
        <Button variant={"locked"}>Click Me</Button>
        <Button variant={"sidebar"}>Click Me</Button>
        <Button variant={"sidebarOutline"}>Click Me</Button>
      </div>

      <div className="flex gap-4">
        <div className="w-[500px]">
          <Card>
            <CardHeader>
              <CardTitle> title</CardTitle>
              <CardDescription>title </CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, veritatis temporibus? Aspernatur magnam vero maxime
              beatae quas quisquam recusandae odio.
            </CardContent>
            <CardFooter>Duck</CardFooter>
          </Card>
        </div>

        <div className="w-[500px]">
          <Card variant="violet">
            <CardHeader>
              <CardTitle> title</CardTitle>
              <CardDescription>title </CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, veritatis temporibus? Aspernatur magnam vero maxime
              beatae quas quisquam recusandae odio.
            </CardContent>
            <CardFooter>Duck</CardFooter>
          </Card>
        </div>

        <div className="w-[500px]">
          <Card variant="red">
            <CardHeader>
              <CardTitle> title</CardTitle>
              <CardDescription>title </CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, veritatis temporibus? Aspernatur magnam vero maxime
              beatae quas quisquam recusandae odio.
            </CardContent>
            <CardFooter>Duck</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
