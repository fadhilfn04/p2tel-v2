'use client';

import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from '@/components/ui/card';
import { CountingNumber } from '@/components/ui/counting-number';
import { Users, UserX, FileText, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { DashboardStats } from '@/lib/types/dashboard';
import { cn } from '@/lib/utils';

interface StatisticsCardsProps {
  stats: DashboardStats;
}

const statsConfig = [
  {
    key: 'totalAnggota',
    title: 'Total Anggota',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
  },
  {
    key: 'anggotaAktif',
    title: 'Anggota Aktif',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
  },
  {
    key: 'anggotaMeninggal',
    title: 'Anggota Meninggal',
    icon: UserX,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
  },
  {
    key: 'totalKlaimDakem',
    title: 'Total Klaim Dakem',
    icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
  },
  {
    key: 'klaimPending',
    title: 'Klaim Pending',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
  },
  {
    key: 'totalDicairkan',
    title: 'Total Dicairkan',
    icon: DollarSign,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
];

export function StatisticsCards({ stats }: StatisticsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {statsConfig.map((stat) => {
        const Icon = stat.icon;
        const value = stats[stat.key as keyof DashboardStats];
        const isCurrency = stat.key === 'totalDicairkan';

        return (
          <Card key={stat.key}>
            <CardHeader className="card-toolbar border-b-0 mb-0 pb-4">
              <CardToolbar>
                <div className="flex items-center gap-3">
                  <div className={cn('p-2.5 rounded-lg', stat.bgColor)}>
                    <Icon className={cn('size-5', stat.color)} />
                  </div>
                  <div>
                    <CardTitle className="text-base font-medium text-gray-900 dark:text-gray-100">
                      {stat.title}
                    </CardTitle>
                  </div>
                </div>
              </CardToolbar>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {isCurrency ? (
                  <CountingNumber
                    to={value as number}
                    duration={2}
                    format={(v) =>
                      new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(v)
                    }
                  />
                ) : (
                  <CountingNumber to={value as number} duration={2} />
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
