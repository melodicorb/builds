import Link from 'next/link';

interface CategoryProps {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export default function CategorySection() {
  const categories: CategoryProps[] = [
    {
      title: 'Profile Keywords',
      description: 'Find the best keywords to enhance your LinkedIn profile and get noticed by recruiters.',
      icon: '👤',
      category: 'profile'
    },
    {
      title: 'Job Search Keywords',
      description: 'Discover the most effective keywords to use in your job applications and searches.',
      icon: '🔍',
      category: 'job'
    },
    {
      title: 'Content Keywords',
      description: 'Research trending keywords to boost engagement on your LinkedIn posts and articles.',
      icon: '📝',
      category: 'content'
    }
  ];

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Explore LinkedIn Keywords By Category</h2>
      
      <div className="row g-4">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4 home-category-card">
            <div className="card h-100 shadow-sm hover-shadow transition">
              <div className="card-body text-center p-4">
                <div className="display-4 mb-3">{category.icon}</div>
                <h3 className="card-title">{category.title}</h3>
                <p className="card-text text-muted">{category.description}</p>
                <Link 
                  href={`/search?category=${category.category}`} 
                  className="btn btn-outline-primary mt-3"
                >
                  Explore {category.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}