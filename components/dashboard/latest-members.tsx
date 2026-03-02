'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserCheck } from 'lucide-react';
import { Member } from '@/lib/types/dashboard';
import { formatDate } from '@/lib/data/mock-data';
import { cn } from '@/lib/utils';

interface LatestMembersProps {
  members: Member[];
}

export function LatestMembers({ members }: LatestMembersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCheck className="size-5" />
          Anggota Terbaru
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {member.nama}
                  </p>
                  <Badge
                    variant={member.status === 'aktif' ? 'primary' : 'secondary'}
                    className="text-xs"
                  >
                    {member.status === 'aktif' ? 'Aktif' : 'Tidak Aktif'}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  NIK: {member.nik}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Bergabung: {formatDate(member.tanggalBergabung)}
                </p>
              </div>
              <div className="ml-4 text-right">
                {member.telepon && (
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {member.telepon}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
