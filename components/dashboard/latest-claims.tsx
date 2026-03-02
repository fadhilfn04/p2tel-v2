'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';
import { Claim } from '@/lib/types/dashboard';
import { formatDate, formatCurrency } from '@/lib/data/mock-data';
import { cn } from '@/lib/utils';

interface LatestClaimsProps {
  claims: Claim[];
}

const statusConfig = {
  pending: {
    label: 'Pending',
    variant: 'secondary' as const,
    className: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400',
  },
  disetujui: {
    label: 'Disetujui',
    variant: 'default' as const,
    className: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  },
  ditolak: {
    label: 'Ditolak',
    variant: 'destructive' as const,
    className: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400',
  },
  dicairkan: {
    label: 'Dicairkan',
    variant: 'default' as const,
    className: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400',
  },
};

const kategoriConfig = {
  'dana-kematian': 'Dana Kematian',
  'dana-sosial': 'Dana Sosial',
};

export function LatestClaims({ claims }: LatestClaimsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="size-5" />
          Klaim Dakem Terbaru
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {claims.map((claim) => {
            const status = statusConfig[claim.status];
            const kategori = kategoriConfig[claim.kategori];

            return (
              <div
                key={claim.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {claim.namaAnggota}
                    </p>
                    <Badge className={cn('text-xs', status.className)}>
                      {status.label}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {kategori}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Tanggal Klaim: {formatDate(claim.tanggalKlaim)}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(claim.jumlah)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
