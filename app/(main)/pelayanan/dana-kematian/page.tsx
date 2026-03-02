'use client';

import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Plus, FileText, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';
import { mockClaims } from '@/lib/data/mock-data';
import { formatDate, formatCurrency } from '@/lib/data/mock-data';

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400', icon: Clock },
  disetujui: { label: 'Disetujui', className: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400', icon: CheckCircle },
  ditolak: { label: 'Ditolak', className: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400', icon: XCircle },
  dicairkan: { label: 'Dicairkan', className: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400', icon: CheckCircle },
};

export default function DanaKematianPage() {
  const dakemClaims = mockClaims.filter((c) => c.kategori === 'dana-kematian');

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Dana Kematian</ToolbarPageTitle>
          <ToolbarDescription>Pengelolaan klaim dana kematian</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            <FileText className="size-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Klaim Baru
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">156</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Klaim</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Disetujui</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">120</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dicairkan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="size-5 text-red-600" />
            Daftar Klaim Dana Kematian
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    No
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Nama Anggota
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Tanggal Klaim
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Jumlah
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {dakemClaims.map((claim, index) => {
                  const status = statusConfig[claim.status];
                  const StatusIcon = status.icon;
                  return (
                    <tr
                      key={claim.id}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {claim.namaAnggota}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(claim.tanggalKlaim)}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {formatCurrency(claim.jumlah)}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={`text-xs ${status.className} flex items-center gap-1 w-fit`}>
                          <StatusIcon className="size-3" />
                          {status.label}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="size-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
