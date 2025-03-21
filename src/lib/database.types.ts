export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string
          created_at: string
          updated_at: string
          slug: string
          published: boolean
          excerpt: string
          cover_image: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id: string
          created_at?: string
          updated_at?: string
          slug: string
          published?: boolean
          excerpt: string
          cover_image: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author_id?: string
          created_at?: string
          updated_at?: string
          slug?: string
          published?: boolean
          excerpt?: string
          cover_image?: string
        }
      }
      quote_requests: {
        Row: {
          id: string
          service_type: string
          description: string
          user_id: string
          status: string
          created_at: string
          contact_email: string
          contact_phone: string
          property_size: number
          preferred_date: string
        }
        Insert: {
          id?: string
          service_type: string
          description: string
          user_id: string
          status?: string
          created_at?: string
          contact_email: string
          contact_phone: string
          property_size: number
          preferred_date: string
        }
        Update: {
          id?: string
          service_type?: string
          description?: string
          user_id?: string
          status?: string
          created_at?: string
          contact_email?: string
          contact_phone?: string
          property_size?: number
          preferred_date?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          avatar_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}