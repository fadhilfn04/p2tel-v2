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
import { DollarSign, Plus, CheckCircle, Clock, XCircle, Eye, Heart } from 'lucide-react';

const socialAidData = [
  {
    id: '1',
    nama: 'Rudi Hartono',
    jenis: 'Kesehatan',
    jumlah: 5000000,
    tanggal: new Date('2024-02-15'),
    status: 'disetujui',
  },
  {
    id: '2',
    nama: 'Sri Wahyuni',
    jenis: 'Pendidikan',
    jumlah: 3000000,
    tanggal: new Date('2024-02-14'),
    status: 'pending',
  },
  {
    id: '3',
    nama: 'Agus Setiawan',
    jenis: 'Musibah',
    jumlah: 7000000,
    tanggal: new Date('2024-02-13'),
    status: 'dicairkan',
  },
];

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400' },
  disetujui: { label: 'Disetujui', className: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400' },
  ditolak: { label: 'Ditolak', className: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400' },
  dicairkan: { label: 'Dicairkan', className: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400' },
};

export default function DanaSosialPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Dana Sosial</ToolbarPageTitle>
          <ToolbarDescription>Pengelolaan bantuan dana sosial</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Pengajuan Baru
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <DollarSign className="size-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Rp 75jt</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Dana Tersedia</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Heart className="size-8 mx-auto mb-2 text-red-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">78</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Bantuan</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Clock className="size-8 mx-auto mb-2 text-orange-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <CheckCircle className="size-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Rp 45jt</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sudah Dicairkan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Jenis Bantuan Tersedia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <Heart className="size-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Bantuan Kesehatan
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Max: Rp 5.000.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Heart className="size-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Bantuan Pendidikan
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Max: Rp 3.000.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <Heart className="size-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Bantuan Musibah
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Max: Rp 7.000.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pengajuan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {socialAidData.map((item) => {
                const status = statusConfig[item.status as keyof typeof statusConfig];
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {item.nama}
                        </p>
                        <Badge className={`text-xs ${status.className}`}>
                          {status.label}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.jenis} • {item.jumlah.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="ml-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="size-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
