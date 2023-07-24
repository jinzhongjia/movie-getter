package getter

func (here *Getter) Rename(name string) {
	here.name = name
}

func (here *Getter) Reurl(url string) {
	here.url = url
}
