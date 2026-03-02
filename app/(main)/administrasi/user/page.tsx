'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, Edit, Trash2, Shield } from 'lucide-react';
import { mockSystemUsers } from '@/lib/data/mock-data';

export default function UserManagementPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Manajemen User</ToolbarPageTitle>
          <ToolbarDescription>Kelola pengguna sistem</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button size="sm">
            <Plus className="size-4 mr-2" />
            Tambah User
          </Button>
        </ToolbarActions>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5" />
            Daftar Pengguna
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Nama</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {mockSystemUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Shield className="size-4 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.nama}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge className="text-xs capitalize">{user.role}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={`text-xs ${user.status === 'aktif' ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400' : 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400'}`}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="size-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600">
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
