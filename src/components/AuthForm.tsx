
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart } from 'lucide-react';

interface AuthFormProps {
  onLogin: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-melancholic-gradient p-4">
      <Card className="w-full max-w-md bg-black/40 backdrop-blur-sm shadow-2xl border border-white/20 fade-in">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-nostalgic-blue/90" />
          </div>
          <CardTitle className="text-2xl font-light text-white/90">
            Una Despedida Especial
          </CardTitle>
          <CardDescription className="text-white/70 text-sm leading-relaxed">
            Esta página ha sido creada especialmente para ti. <br />
            Por favor, ingresa para ver tu mensaje.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 font-medium">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/30 border-white/20 focus:border-nostalgic-blue/50 text-white placeholder:text-white/50 transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80 font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/30 border-white/20 focus:border-nostalgic-blue/50 text-white placeholder:text-white/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-nostalgic-blue/80 hover:bg-nostalgic-blue text-white font-medium py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Entrar
            </Button>
          </form>
          <div className="text-center text-xs text-white/50 mt-6">
            Hecho con amor para alguien muy especial ♥
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
