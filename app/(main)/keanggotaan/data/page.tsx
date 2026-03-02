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
import { Users, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import { mockMembers } from '@/lib/data/mock-data';
import { formatDate } from '@/lib/data/mock-data';

export default function KeanggotaanDataPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Pengelolaan Data Anggota</ToolbarPageTitle>
          <ToolbarDescription>Kelola data keanggotaan koperasi</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            <Filter className="size-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search className="size-4 mr-2" />
            Search
          </Button>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Tambah Anggota
          </Button>
        </ToolbarActions>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5" />
            Daftar Anggota
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Nama
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    NIK
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Tanggal Bergabung
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Telepon
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {member.nama}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.nik}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(member.tanggalBergabung)}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={member.status === 'aktif' ? 'primary' : 'secondary'}
                        className="text-xs"
                      >
                        {member.status === 'aktif' ? 'Aktif' : 'Tidak Aktif'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.telepon || '-'}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
