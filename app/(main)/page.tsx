'use client';

import { StatisticsCards } from '@/components/dashboard/statistics-cards';
import { LatestMembers } from '@/components/dashboard/latest-members';
import { LatestClaims } from '@/components/dashboard/latest-claims';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { mockDashboardStats, mockMembers, mockClaims } from '@/lib/data/mock-data';

export default function HomePage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Dashboard</ToolbarPageTitle>
          <ToolbarDescription>Sistem Informasi Perkumpulan Pensiunan Telkom</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <div className="space-y-6">
        {/* Statistics Cards */}
        <StatisticsCards stats={mockDashboardStats} />

        {/* Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LatestMembers members={mockMembers} />
          <LatestClaims claims={mockClaims} />
        </div>
      </div>
    </div>
  );
}
