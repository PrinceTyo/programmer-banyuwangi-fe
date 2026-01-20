import { getSnapshots } from "@/lib/api/snapshots";
import { GradientBackground } from "@/components/ui/background";
import SnapshotSection from "./_components/snapshot-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snapshot",
};

export default async function Snapshots() {
  const { data: snapshots } = await getSnapshots();

  return (
    <GradientBackground>
      <SnapshotSection snapshots={snapshots} />
    </GradientBackground>
  );
}
