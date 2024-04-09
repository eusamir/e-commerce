import { GithubProfile } from "@/components/github-profile";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <GithubProfile/>
    </div>
  )
}
