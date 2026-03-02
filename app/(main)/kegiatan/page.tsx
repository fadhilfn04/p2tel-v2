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
import { Calendar, MapPin, Users, Plus, ChevronRight } from 'lucide-react';

const eventsData = [
  {
    id: '1',
    judul: 'Reksi Pensiunan Telkom 2024',
    tanggal: '15 Maret 2024',
    lokasi: 'Graha Telkom, Jakarta',
    peserta: 250,
    status: 'upcoming',
    deskripsi: 'Pertemuan rutin tahunan seluruh pensiunan Telkom',
  },
  {
    id: '2',
    judul: 'Senam Sehat Bersama',
    tanggal: 'Setiap hari Sabtu',
    lokasi: 'Lapangan Kantor Pusat',
    peserta: 50,
    status: 'ongoing',
    deskripsi: 'Kegiatan senam rutin untuk menjaga kesehatan',
  },
  {
    id: '3',
    judul: 'Buka Puasa Bersama',
    tanggal: '20 Maret 2024',
    lokasi: 'Restoran Padang Sederhana',
    peserta: 100,
    status: 'upcoming',
    deskripsi: 'Buka puasa bersama bulan Ramadhan',
  },
];

export default function KegiatanPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Kegiatan & Acara</ToolbarPageTitle>
          <ToolbarDescription>Informasi kegiatan sosial dan acara pensiunan</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            Kalender
          </Button>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Buat Acara
          </Button>
        </ToolbarActions>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Calendar className="size-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Acara Tahun Ini</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Users className="size-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">850+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Peserta Aktif</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <ChevronRight className="size-8 mx-auto mb-2 text-purple-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kegiatan Rutin</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <MapPin className="size-8 mx-auto mb-2 text-orange-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">8</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lokasi Kegiatan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Kegiatan Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        {event.judul}
                      </h3>
                      <Badge
                        className={`text-xs ${
                          event.status === 'ongoing'
                            ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400'
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                        }`}
                      >
                        {event.status === 'ongoing' ? 'Berlangsung' : 'Akan Datang'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {event.deskripsi}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {event.tanggal}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-3" />
                        {event.lokasi}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="size-3" />
                        {event.peserta} peserta
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Button variant="outline" size="sm">
                      Detail
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Jenis Kegiatan Rutin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Olahraga & Kesehatan
                </h4>
                <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Senam sehat (Sabtu)</li>
                  <li>• Jalan pagi (Minggu)</li>
                  <li>• Cek kesehatan berkala</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Sosial & Keagamaan
                </h4>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• Arisan (Bulanan)</li>
                  <li>• Buka puasa bersama</li>
                  <li>• Perayaan hari besar</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Edukasi & Rekreatif
                </h4>
                <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-300">
                  <li>• Seminar kesehatan</li>
                  <li>• Wisata domestik</li>
                  <li>• Pelatihan keterampilan</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
