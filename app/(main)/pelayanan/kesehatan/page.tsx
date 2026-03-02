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
import { Heart, Plus, Calendar, CheckCircle, Clock, Pill, Stethoscope } from 'lucide-react';

const healthBenefitsData = [
  {
    id: '1',
    nama: 'dr. Budi Santoso',
    spesialisasi: 'Umum',
    jadwal: 'Senin & Kamis, 09:00 - 12:00',
    kuota: 20,
    status: 'available',
  },
  {
    id: '2',
    nama: 'dr. Siti Rahayu',
    spesialisasi: 'Penyakit Dalam',
    jadwal: 'Selasa, 14:00 - 17:00',
    kuota: 15,
    status: 'limited',
  },
];

export default function KesehatanPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Layanan Kesehatan</ToolbarPageTitle>
          <ToolbarDescription>Program kesehatan untuk pensiunan Telkom</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            Riwayat Medis
          </Button>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Janji Temu
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Stethoscope className="size-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dokter Mitra</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Calendar className="size-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">120</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Janji Temu/Bulan</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Pill className="size-8 mx-auto mb-2 text-purple-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">15</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Program Kesehatan</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Heart className="size-8 mx-auto mb-2 text-red-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">98%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kepuasan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Jadwal Dokter Mitra</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {healthBenefitsData.map((dokter) => (
                <div
                  key={dokter.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {dokter.nama}
                      </p>
                      <Badge
                        className={`text-xs ${
                          dokter.status === 'available'
                            ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400'
                            : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400'
                        }`}
                      >
                        {dokter.status === 'available' ? 'Tersedia' : 'Terbatas'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {dokter.spesialisasi} • {dokter.jadwal}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Kuota: {dokter.kuota} pasien
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-2">
                    Daftar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Program Kesehatan</CardTitle>
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
                      Cek Kesehatan Berkala
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Gratis 2x setahun
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Pill className="size-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Subsidi Obat
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Diskon hingga 50%
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <Stethoscope className="size-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Konsultasi Spesialis
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Prioritas pendaftaran
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <Calendar className="size-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Vaksinasi Flu
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Gratis setahun sekali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
